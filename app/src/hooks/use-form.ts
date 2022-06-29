import { useState } from "react";

const useForm = <T>({ initialData, handleSubmit, converter = (v: any) => v }: {
    initialData: T;
    handleSubmit: (data: T) => void;
    converter?: (v: any) => any;
}) => {
    const [formState, setFormState] = useState<T>({
        ...initialData,
    });
    const handleInputChange = (event: any): void =>
        setFormState({
            ...formState,
            [event.target.name]: converter(event.target.value),
        });
    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleSubmit(formState);
    };

    return {
        formState,
        handleInputChange,
        onSubmit,
    }
}

export default useForm;
