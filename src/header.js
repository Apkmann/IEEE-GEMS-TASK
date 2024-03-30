
import "./header.css"
import profile from "./profile.png"
import notification from "./notification.png"
import search from "./search.png"
export default function Head({handleSearchChange})
{
    return(
        <div className="header">
            <input className = "searchvalue" type="search" placeholder="Search..."/>
            <button onClick={()=>handleSearchChange(document.getElementsByClassName("searchvalue")[0].value)} className="submit"><img className="search" src={search} alt="search"/></button>
            <div className="sidehead">
                <div className="innerside">
                    <a href="/"><img src={notification} alt="Notification"/></a>
                    <a href="/"> <img src={profile} alt="Profile"/></a>
                </div>
            </div>
        </div>
    )
}