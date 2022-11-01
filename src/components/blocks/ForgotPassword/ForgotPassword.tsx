const ForgotPassword = () => {
    return (<>
        <form>
            <div>
                <h2>Password Assistance</h2>
                <p>Enter the email address associated with your account.</p>
            </div>
            <div>
                <label hidden htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='email' />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </>)
}

export default ForgotPassword