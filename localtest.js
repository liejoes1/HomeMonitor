var webgetter = require('./webgetter');

var parseData = require('./parsedata');

var parseString = require('xml2js').parseString;
var global = require('./global');
var fs = require('fs');
const jsonfile = require('jsonfile');

webgetter.getData(function (response) {
    if (isXMLString(response))
    {
        parseString(response, function (err, result) { 
                        
            if (IsJsonString(JSON.stringify(result)))
            {
                console.log(parseData.parse(result)); 
            }
            else {
                console.log("Invalid Data");
            }     
        })
    }
    else {
        console.log("Invalid Data");
        
        if (fs.existsSync(global.localPath)) {
            console.log("File Exist");
            jsonfile.readFile(global.localPath, function (err, obj) {
                
            // Counter reaches 10, no more valid connection
            if (obj.errorCounter > 10)
            {
                // Do Something, such as send telegram message, etc
                // and after that break it

                // When done, revert counter back to 0
                const resobj = { errorCounter: 0 };

                jsonfile.writeFile(global.localPath, resobj, function (err) {
                    if (err) console.error(err)
                })

            }   
            
            // Read the JSON
            const resobj = { errorCounter: obj.errorCounter + 1 }

            jsonfile.writeFile(global.localPath, resobj, function (err) {
                if (err) console.error(err)
                })
            })

            

        }
        else {
            // Create File starts with 0
            console.log("File Not Exist");
            // Create file for persistent storage
            const obj = { errorCounter: 0 }
            jsonfile.writeFile(global.localPath, obj, function (err) {
            if (err) console.error(err)
            })
        }
    }
})

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isXMLString(str)
{
    if (str == global.offline)
    {
        return false;
    }
    try {
        parseString(str, function (err, result) {                            
        })
    } catch (e) {
        return false;
    }
    return true;
}


