/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let Name, Alter;
Name = prompt("Biite Namen eingeben:");
Alter = prompt("Bitte Alter eingeben:");

let Milch, Saft, Cola, Wein;
Milch = Alter > 0 && Alter <=5;
Saft = Alter > 5 && Alter <= 12;
Cola = Alter >= 13 && Alter <= 17;
Wein = Alter >= 18;

if (Milch) 
{
    console.log(Name + " " + "trinkt Milch");    
}
else if (Saft) 
{
    console.log(Name + " " + "trinkt Saft");  
}
else if (Cola) 
{
    console.log(Name + " " + "trinkt Cola");    
}
else if (Wein)
{
    console.log(Name + " " + "trinkt Wein");
}