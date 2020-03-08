var arr = [
    {
        name: "c#",
        label: [{
            name: "java",
            label: [{
                name: "vb.net",
                label: [{
                    name: "javascript",
                    label: [{
                        name: "python",
                        label: {
                            name: "typescript",
                            label: [{ name: "c++", label: [] }]
                        }
                    }]
                }]
            }]
        }]
    },
    {
        name: "noddy",
        label: [{
            name: "oswald",
            label: [{
                name: "tom and jerry",
                label: [{
                    name: "scooby doo",
                    label: [{
                        name: "shinchan",
                        label: [{
                            name: "bob the builder",
                            label: { name: "heidi", label: [] }
                        }]
                    }]
                }]
            }]
        }]
    }
]

const newarr=[];

function printval()
{
recval(arr);
    console.log(newarr);
}

function recval(ele)
{
 ele.forEach((val)=>
 {
     newarr.push(val.name);
     if (Array.isArray(val.label))
     {
        recval(val.label)
     }
     else if ( typeof (val.label)==='object' && val.label!==null)
     {
         console.log(val.label);
        newarr.push(val.label.name);
        recval(val.label.label);
     }
    
 })
 
}

printval();