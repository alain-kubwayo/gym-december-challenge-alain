const Button = ({ description, style }) => {
    return <button className={`px-5 py-4 text-base ${style}`}>{description}</button>;
}
 
export default Button;
