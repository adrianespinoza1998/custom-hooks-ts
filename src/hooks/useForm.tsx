import { useState } from "react";

export const useForm = () => {
    const [form, setForm] = useState<FormLogin>({
        email: "",
        password: "",
    });

    const [isValidateEmail, setIsValidateEmail] = useState<boolean>(true);
    const [isValidatePassword, setIsValidatePassword] = useState<boolean>(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        validateForm(e.target.name, e.target.value);

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = (name: string, value: string) => {

        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/;

        switch (name) {
            case "email":
                console.log({name, value});
                if(value.includes("@") && value.includes(".") || value === ""){
                    setIsValidateEmail(true);
                }else{
                    setIsValidateEmail(false);
                }
                break;
            case "password":
                console.log({name, value});
                if(value.length > 8 && regex.test(value)  || value === ""){
                    setIsValidatePassword(true);
                }else{
                    setIsValidatePassword(false);
                }
                break;
            default:
                break;
        }
    };

    return {
        ...form,
        isValidateEmail,
        isValidatePassword,
        handleInputChange
    }
}
