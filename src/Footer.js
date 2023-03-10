import logo from  './icons_assets/Logo.svg'
import instagram from './icons_assets/instagram.svg'
import twitter from  './icons_assets/twitter.svg'


export const Footer = () => {
    return(
        // <section className="footer">
        // <div className = "container">
        //     <div className = "row">
        //         <div className = "col">
        //             <img src={logo}/>
        //         </div>
        //         <div className= "col">
        //             <div className = "row">
               
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </section>

        <div className= "footer">
            <div className="container">
                <div className="row">
                    <div className ="col">
                    <img src ={logo}/> 
                    </div>
                    <div className ="col footerLinks">
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Menu
                            </li>
                            <li>
                                Reservations
                            </li>
                            <li>
                                Order Online
                            </li>
                        </ul>
                    </div>
                    <div className ="col contacts">
                        <ul>
                            <li>
                                <h5>Contacts</h5>
                            </li>
                            <li>
                                Address
                            </li>
                            <li>
                              Phone
                            </li>
                            <li>
                               email
                            </li>
                        </ul>
                    </div>
                    <div className ="col socials ">
                        <ul >
                            <li>
                                <h5>Social</h5>
                            </li>
                            <li>
                                <img src={instagram} alt = 'instagram logo'  className ="img-responsive"/>
                            </li>
                            <li>
                            <img src={twitter} alt = 'twitter logo' className ="img-responsive"/>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}