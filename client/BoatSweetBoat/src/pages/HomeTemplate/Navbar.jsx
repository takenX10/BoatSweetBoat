import './home.scss';
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light">
    <div class="container">
    <a className="navbar-brand col-8" href="#!"><img src='http://localhost:3000/images/logo.png' /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-4" id="navbar1">
            <ul class="navbar-nav nav nav-fill w-100">

                <li class="nav-item">
                <a className="navbar-brand" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a className="navbar-brand" href="#signup">Esplora l'imbarcazione</a>
                </li>
                <li class="nav-item">
                <a className="navbar-brand" href="#footerTemplate">Contattami</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </>
    );
};

export default Navbar;
/*
<nav className="navbar navbar-light bg-light fixed-top navbar-scroll">
           <div className="container col-8">
           <a className="navbar-brand" href="#!"><img src='http://localhost:3000/images/logo.png' /></a>
           </div>
                <div className="container col-4">
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="#signup">Esplora l'imbarcazione</a>
                    <a className="navbar-brand" href="#signup">Contattami</a>

                </div>
            </nav>



            //
            <div class="container-fluid main-nav ">
                <div class="row">
                    <div class="container">
                        <nav id="topNav" class="navbar navbar-expand-lg">
                            <div class="navbar-brand mex-auto logo container col-8"> <a href="#"><img src="http://localhost:3000/images/logo.png" /></a> </div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"> <span>Menu</span></button>
                            <div class="navbar-collapse collapse container col-4">
                                <a className="navbar-brand" href="/">Home</a>
                                <a className="navbar-brand" href="#signup">Esplora l'imbarcazione</a>
                                <a className="navbar-brand" href="#signup">Contattami</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            */