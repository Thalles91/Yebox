import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    YeEngine.AlterThemeSystem(YeEngine.Theme.DarkTheme)
    YeEngine.AlterTheme(YeEngine.Theme.TemaCinza)
    YeEngine.ModifyW(YeEngine.getElementById("card"),"90vh")
    YeEngine.ModifyH(YeEngine.getElementById("card"),"60vh")
    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)

let update = setInterval(()=>{
    if(YeEngine.Questions_save[0] !=undefined)
    {
        YeEngine.ModifyContentClass(document.getElementById("quest1"),YeEngine.Questions_save[0])
        clearInterval(update)
    }
},600)