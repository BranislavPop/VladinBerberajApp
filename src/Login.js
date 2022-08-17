import './Login.css';

function Login() {
    return (
        <div className={"Login"}>
            <form className={"loginForm"}>
                <fieldset>
                    <input id={"loginUsername"}/>
                    <label form={"loginUsername"}>Username</label>
                    <input id={"loginPassword"}/>
                    <label form={"loginPassword"}>Password</label>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;