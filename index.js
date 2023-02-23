var question = [
  {
    q_title:"fAn ____ a day keeps doctor away",
    ops:[
        "apple","banana","mang","orange"
    ],
    correct:"apple",
    score:1
  },

  {
    q_title:"fCSS is for ",
    ops:[
       "styling","designing","API connection" ,"both A and B"
    ],
    correct:"both A and B",
    score:2
  },
  {
    q_title:"full form of HTML",
    ops:[
        
        "high text markup language",
        "hyper type markup language",
        "hyper text markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  },  
  {
    q_title:" A for _____",
    ops:[
       "Apple", "Aeroplane","Banana" ,"bont A and B"
    ],
    correct:"bont A and B",
    score:2
  },  
  {
    q_title:"full form of HTML",
    ops:[
        "hyper text markup language",
        "high text markup language",
        "hyper type markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  }, 
   {
    q_title:"full form of HTML",
    ops:[
        "hyper text markup language",
        "high text markup language",
        "hyper type markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  },  
  {
    q_title:"full form of HTML",
    ops:[
        "hyper text markup language",
        "high text markup language",
        "hyper type markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  },  
  {
    q_title:"full form of HTML",
    ops:[
        "hyper text markup language",
        "high text markup language",
        "hyper type markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  },  
  {
    q_title:"full form of HTML",
    ops:[
        "hyper text markup language",
        "high text markup language",
        "hyper type markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  },  
  {
    q_title:"full form of HTML",
    ops:[
        "hyper text markup language",
        "high text markup language",
        "hyper type markup language",
        "nonne of abouve"
    ],
    correct:"hyper text markup language",
    score:2
  },
]

let i=0  // inportant variable 
let total_score=0;
let choosen_ans_ind=null;
let ans=(x)=>{

    choosen_ans_ind=x.value

}

const sub=()=>{
  if(choosen_ans_ind==null)
   {
    alert("please select the options")
    return;
   }
    if(question[i].correct==question[i].ops[choosen_ans_ind])
   {
    document.getElementById("right_wrong").style.display="block"
    document.getElementById("right_wrong").style.backgroundColor="green"
    document.getElementById("right_wrong").innerHTML="Correct"  
     total_score=total_score+  question[i].score
  console.log(total_score)
   }
    
    else
    {
      document.getElementById("right_wrong").style.display="block"
      document.getElementById("right_wrong").style.backgroundColor="red"
      document.getElementById("right_wrong").innerHTML="Incorrect"
    }
    document.getElementById("next").style.display="block"
    document.getElementById("sub").style.display="none"
}



const nextQuiestion=()=>{
  document.getElementById("next").style.display="none"
  document.getElementById("sub").style.display="block"
  document.getElementById("right_wrong").style.display="none"
    document.getElementById("q_title").innerHTML=question[i].q_title
    for(j=0;j<4;j++){
        const optios=document.getElementById(`${j}`)
        const input= optios.getElementsByTagName("input")
        const label=document.getElementById(`op${j}`)
        label.innerHTML=question[i].ops[j]
    }
}
nextQuiestion()

let next=()=>{
  i++
  if(i>=question.length){
    disPlayAAnswerKey()
  }
 else{
  let imp=document.getElementById(`${choosen_ans_ind}`)
  imp.checked=false;
  choosen_ans_ind=null
  nextQuiestion()
 }

}
const disPlayAAnswerKey=()=>{
    document.getElementById("last_page_container").style.display="flex"
   document.getElementById("quiz_title").style.display="none"
   document.getElementById("quiz_containeer").style.display="none"
   document.getElementById("last_page").style.display="flex"
    const answerKeyCard=document.getElementById("answerKey")
    answerKeyCard.innerHTML=``
    for(j=0;j<question.length;j++){
      const  ques= document.createElement("h3")
      ques.innerHTML=question[j].q_title
      const answer=document.createElement("h4")
      answer.innerHTML=question[j].correct
      answerKeyCard.appendChild(ques)
      answerKeyCard.appendChild(answer)
      const br  = document.createElement("br")
      answerKeyCard.appendChild(br)
    }
   const sc=document.getElementById("score")
  const sc_display= document.createElement("h1")
  const btn=document.createElement("button")
  btn.innerHTML="Restart"
  btn.addEventListener("click", restart)
btn.onclick="restart()"
  sc_display.innerHTML=total_score;
  sc.innerHTML=''
  sc.appendChild(btn)
  sc.appendChild(sc_display)
 
}


const restart=()=>{
  i=0;
  total_score=0;
  document.getElementById("quiz_title").style.display="block"
  document.getElementById("quiz_containeer").style.display="flex"
  document.getElementById("last_page").style.display="none"
  nextQuiestion();

}
