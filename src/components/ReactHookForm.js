import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
  firstName: Yup.string().min(2, "Must be at least 2 characters").max(30, 'Must be 30 characters or less')
    .required('Required'),
  lastName: Yup.string().required('Required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required')
})

export default function ReactHookForm() {
  const { register, formState: { errors }, handleSubmit } = useForm({resolver: yupResolver(validationSchema)});
  const onSubmit = data => alert(JSON.stringify(data, null, 2));

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: "300px"
        }}>

          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>

          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} />
          <p>{errors.lastName?.message}</p>

          <label htmlFor="phoneNumber">Phone Number</label>
          <input {...register("phoneNumber")} />
          <p>{errors.phoneNumber?.message}</p>

          <label htmlFor="email">Email</label>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>

        <input type="submit" />
        </div>
      </form>
    </div>
  )
}
