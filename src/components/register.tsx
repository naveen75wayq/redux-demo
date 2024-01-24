
import { SubmitHandler, useForm } from 'react-hook-form'
import {FormControl} from '@ma'
import './demo.css'
interface FormField {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobile: number;
    title: string;
    developer: "Yes" | "No";
}
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormField>();
    const onSubmit: SubmitHandler<FormField> = (data) => {
        console.log(data);

    }
    return (
        <div>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} type="text" placeholder="First name" />
                <input {...register("lastName", { required: true })} type="text" placeholder="Last name" />
                <input {...register("email", { pattern: /^\S+@\S+$/i, required: 'Email is required' })} type="text" placeholder="Email" />
                {errors.email && <div className='container'>{errors.email.message}</div>}
                <input {...register("password", { required: 'Password is required' })} type="password" placeholder="Password" />
                {errors.password && <div className='container'>{errors.password.message}</div>}
                <input {...register("mobile", { required: true })} type="tel" placeholder="Mobile number" />
                <select {...register("title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>

                <input {...register("developer", { required: true })} type="radio" value="Yes" />
                <input {...register("developer", { required: true })} type="radio" value="No" />

                <input type="submit" />
            </form> */}
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    )
}
export default Register