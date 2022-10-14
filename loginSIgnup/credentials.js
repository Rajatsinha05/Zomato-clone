function signUP (){
    return `<div id="signUp">
    <div id="signUpHead">
        <h2>Sign up</h2>
        <i class="fa-solid fa-xmark" id="signUpCloseBttn"></i>
    </div>
    <form action="" id="submitSignUp" >
        <input type="text" placeholder="Full Name" required id="signUpName">
        <input type="email" placeholder="Email" required id="signUpEmail">
        <input type="password" placeholder="Password" required id="signUpPassword">
        <div id="radioDiv">
            <input type="checkbox" required id="iAgree">
            <label for="iAgree">I agree to Zomato's <span class="redColorSignUp">Terms of Service.</span> <span class="redColorSignUp">Privacy Policy</span> and <span class="redColorSignUp">Content Policies</span></label>

        </div>

        <button type="submit" >Create Account</button>



    </form>
    <div id="orDiv"><p>or</p></div>
    <button id="googleSignUp">
        <img id="googleImg"src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"   alt="">
        <p>Continue with Google</p>
    </button>

    <p>Already have an account? <span class="redColorSignUp" id="logInLink">Log in</span> </p>

</div>`
}

function logIn(){
    return `<div id="logIn">
    <div id="logInHead">
        <h2>LogIn</h2>
        <i class="fa-solid fa-xmark" id="logInCloseBttn"></i>
    </div>
    <form action="" id="submitLogIn">
        <!-- <input type="text" placeholder="Full Name" id="signUpName"> -->
        <input type="email" required placeholder="Email" id="emailLogin">
        <input type="password" required placeholder="Password" id="logInPassword">

        <button type="submit" >Log In</button>



    </form>
    <div id="orDiv"><p>or</p></div>
    <button id="googleSignUp">
        <img id="googleImg"src="https://cdn-icons-png.flaticon.com/512/281/281769.png"   alt="">
        <p>Continue with Email</p>
    </button>
    <button id="googleSignUp1">
        <img id="googleImg1"src="https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png"   alt="">
        <p>Continue with Google</p>
    </button>

    <p>New to Zomato? <span class="redColorSignUp" id="signUpLink">Create Account</span> </p>

</div>
`
}


export {signUP,logIn};