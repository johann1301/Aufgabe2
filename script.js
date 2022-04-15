
// from unix timestam to normal Date
function converte(){

if(document.getElementById("unixTimestamp").value && document.getElementById("normalDate").value ){
    
    if(document.getElementById('invalid')){
        document.getElementById('invalid').remove()
    }


    const body = document.body

    const message = document.createElement('div')
    message.setAttribute("id", "message")
    body.append(message)
    message.innerText = 'Please fill in only one of the input fields'

  } else if (document.getElementById("unixTimestamp").value){

    if(document.getElementById('invalid')){
        document.getElementById('invalid').remove()
    }

    if(document.getElementById('message')){
        document.getElementById('message').remove()
    }

    const unixTimestamp = document.getElementById("unixTimestamp").value *1000
    

    const date = new Date(unixTimestamp);

    let year = date.getFullYear();
        if(year.toString().length === 3){
            year = '0' + year
        }
        if(year.toString().length === 2){
            year = '0' + '0' + year
        }
        if(year.toString().length === 1){
            year = '0' + '0' + '0' + year
        }
        if(year.toString().length === 0){
            year = '0' + '0' + '0' + '0' + year
        }

    let month =  date.getMonth() + 1 ;
        if(month.toString().length === 1){
            month = '0' + month
        }

    let day = date.getDate();
        if(day.toString().length === 1){
            day = '0' + day
        }

    let hours = date.getHours();
        if(hours.toString().length === 1){
            hours = '0' + hours
    }

    let minutes = date.getMinutes();
        if(minutes.toString().length === 1){
            minutes = '0' + minutes
        }

    let seconds = date.getSeconds();
        if(seconds.toString().length === 1){
            seconds = '0' + seconds
        }

    const normalDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds
    

    if (!year || !month || !day || !hours || !minutes || !seconds ){
        const body = document.body

        const invalid = document.createElement('div')
        invalid.setAttribute("id", "invalid")
        body.append(invalid)
        invalid.innerText = 'Invalid input'
    } else {
        document.getElementById('normalDate').value = normalDate
    }


    } else if(document.getElementById("normalDate").value){

        if(document.getElementById('invalid')){
            document.getElementById('invalid').remove()
        }
    
        if(document.getElementById('message')){
            document.getElementById('message').remove()
        }

    const normalDate = document.getElementById("normalDate").value

    const unixTimestamp = Math.floor(new Date(normalDate).getTime() / 1000)

    document.getElementById('unixTimestamp').value = unixTimestamp
    }

}

function reset(){
    document.getElementById('unixTimestamp').value = ''
    document.getElementById('normalDate').value = ''
    
    if(document.getElementById('invalid')){
        document.getElementById('invalid').remove()
    }

    if(document.getElementById('message')){
        document.getElementById('message').remove()
    }
}