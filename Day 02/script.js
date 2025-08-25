let marks=[45,67,87,34,23,79];
let highest=0,i;
for(i=0;i<marks.length;i++)
{
    if(marks[i]>highest)
    {
        highest=marks[i];
    }
}
console.log("Highest Marks in the Array = "+ highest);
