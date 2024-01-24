
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('firstName', { required: true })}
                    label="First name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    {...register('lastName', { required: true })}
                    label="Last name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    {...register('email', { pattern: /^\S+@\S+$/i, required: 'Email is required' })}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.email && (
                    <Typography variant="body2" color="error">
                        {errors.email.message}
                    </Typography>
                )}
                <TextField
                    {...register('password', { required: 'Password is required' })}
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.password && (
                    <Typography variant="body2" color="error">
                        {errors.password.message}
                    </Typography>
                )}
                <TextField
                    {...register('mobile', { required: true })}
                    label="Mobile number"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel>Title</InputLabel>
                    <Select {...register('title', { required: true })} label="Title">
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Mrs">Mrs</MenuItem>
                        <MenuItem value="Miss">Miss</MenuItem>
                        <MenuItem value="Dr">Dr</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <Typography variant="subtitle1">Are you a developer?</Typography>
                    <input
                        {...register('developer', { required: true })}
                        type="radio"
                        value="Yes"
                    />
                    Yes
                    <input
                        {...register('developer', { required: true })}
                        type="radio"
                        value="No"
                    />
                    No
                </div>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
           
        </div>
    )
}
export default Register