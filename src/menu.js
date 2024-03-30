import menu from "./menu.png"
export default function Menu({handlemenu})

{
    return(
        <div className="menucontainer">
            <button onClick={handlemenu} className="menu"><img className="menup" src={menu} alt="menu"/></button>
        </div>
    )
}