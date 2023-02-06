function Clock(){
    let date = new Date();
    let heading = <h1>India</h1>
    let paragraph = <p>current date and time :- {date.toLocaleDateString()} ,{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
    return (
      <div>
          {heading}
          {paragraph}
      </div>
    );
}
setInterval(()=>{
    ReactDOM.render(<Clock/>,document.querySelector("div"))
},1000);