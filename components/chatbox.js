const chatbox = ()=>{
    return `<div style="height: 2rem;min-width:15rem; max-width: 15rem;display: flex;justify-content: center;align-items: center;position: absolute;bottom: 0;right: 2vw;box-shadow: 1px 1px 5px 1px grey;" class="chatrobo">
    <i class="fa-solid fa-headset"></i><span> How may we help you?</span>
</div>


<div style="flex-direction: column;max-width: 23rem;box-shadow: 1px 1px 1px grey;min-width: 23rem;height: 37rem;border-top-left-radius: 0.5rem;border-top-right-radius: 0.5rem;position: absolute;bottom: 1rem;right: 2vw;z-index: 3;background-color: aliceblue;" class="chatroboon">
    <div style=" display: flex;background-color: rgba(59,82,104,255);border-top-left-radius: 0.5rem;border-top-right-radius: 0.5rem;padding: 1rem;" class="topheading">
        <h1 style="color: white;"> How may we help you?</h1><i style="font-size: 2rem;color: white;" class="fa-solid fa-xmark chatclear"></i>
    </div>
    <div style="background-color: white;" class="mainchatbox">This is a dummy chat box</div>
    <input type="text" placeholder="Type your query here">
</div>`
}
export default chatbox;