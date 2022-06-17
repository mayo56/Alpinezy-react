export default function VerifToken (token:string | null) {
    if(!token) {
        window.location.href = "/login/signin"
    }
}