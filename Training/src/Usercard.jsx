const userData =[
    {
        name: "Pushparaj Elumalai",
        city:"Chennai",
        description:"Content Creator",
        skills:["UI/Ux","Fullstack Developer","Graphic Designer","React Js","Node","SQL"],
        online:true,
        profile:"images/p.jpg",
    },
    {
        name: "Jaganraj",
        city:"Chennai",
        description:"Software Developer",
        skills:["UI/Ux","Fullstack Developer","Graphic Designer","React Js","Node","SQL"],
        online:false,
        profile:"images/j.jpg",
    },
    {
        name: "Ranjith Kumar C",
        city:"Chennai",
        description:"Fullstack Developer",
        skills:["UI/Ux","Fullstack Developer","Graphic Designer","React Js","Node","SQL"],
        online:true,
        profile:"images/r.jpg",
    },
   
];


function User(props){
    return(
      <div className = "card-container">
        <span className= {props.online ? "pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>

        <img src = {props.profile} alt = "User" className = "img"></img>

        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className = "primary">Message</button>
            <button className = "primary outline">Following</button>
        </div>
        <div className="skills">
           <h5>Skills</h5>
           <ul>{props.skills.map((skill,index)=>
           <li key={index}>{skill}</li>
           )}</ul>
        </div>
        </div>
        
    );
}

const Usercard = () => {
  return (
    <>
    {
    userData.map((user,index)=>
    (
       <User key = {index} 
        name ={user.name}
        city={user.city} 
        description ={user.description} 
        online ={user.online}
        profile = {user.profile}
        skills={user.skills}
        ></User>
    ))};
    </>
  )
}

User.prototype={
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired


};

export default Usercard