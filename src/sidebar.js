import "./sidebar.css";
import home from "./home.png";
import explore from "./explore.png";
import library from "./library.png";
import history from "./history.png";
import settings from "./settings.png";
import report from "./report.png";
import help from "./help.png";
import feedback from "./feedback.png";
import {useState} from 'react';
import Menu from "./menu";
export default function Sidebar()
{
    const [isMenu,setisMenu] = useState(false);
    const handlemenu = ()=>
    {
        setisMenu(!isMenu);
    };
    return(
        <>
        <Menu handlemenu = {handlemenu}/>
        <div className="sidebar"> 
            <a className="home" href="/"><span><img src={home} alt="Home"/><p>Home</p></span></a>
            <a href="/"><span><img src={explore} alt="Explore"/><p>Explore</p></span></a>
            <a href="/"><span><img src={library} alt="Library"/><p>Library</p></span></a>
            <a href="/"><span><img src={history} alt="History"/><p>history</p></span></a>
            <a href="/"><span><img src={settings} alt="Settings"/><p>Settings</p></span></a>
            <a href="/"><span><img src={report} alt="Report history"/><p>Report history</p></span></a>
            <a href="/"><span><img src={help} alt="Help"/><p>Help</p></span></a>
            <a href="/"><span><img src={feedback} alt="Feedback"/><p>Send feedback</p></span></a>
        </div>
        {isMenu &&
            <div className="sidebardrop">
            <a className="homed" href="/"><span><img src={home} alt="Home"/><p>Homed</p></span></a>
            <a href="/"><span><img src={explore} alt="Explore"/><p>Explore</p></span></a>
            <a href="/"><span><img src={library} alt="Library"/><p>Library</p></span></a>
            <a href="/"><span><img src={history} alt="History"/><p>history</p></span></a>
            <a href="/"><span><img src={settings} alt="Settings"/><p>Settings</p></span></a>
            <a href="/"><span><img src={report} alt="Report history"/><p>Report history</p></span></a>
            <a href="/"><span><img src={help} alt="Help"/><p>Help</p></span></a>
            <a href="/"><span><img src={feedback} alt="Feedback"/><p>Send feedback</p></span></a>
        </div>
        }
        </>
    )
}