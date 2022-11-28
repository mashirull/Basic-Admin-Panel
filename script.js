
$(document).ready(()=>{
    
    const url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    
    $('#overlay').show()


    $.get(url, data =>{
        $('#overlay').hide()
        
        data.forEach( profile => {

            const tableDataRow = `<tr class="data-row" id=${profile.id}   >
             <td class="column1">${profile.id}</td>
             <td class="column2">${profile.firstName}</td>
             <td class="column3">${profile.lastName}</td>
             <td class="column4">${profile.email}</td>
             <td class="column5">${profile.phone}</td>
            </tr>
            `
  
            $('#tbody').append(tableDataRow)                 
        });


        let dataRows = $('.data-row');
        for(let i=0; i < dataRows.length  ;   i++){
            dataRows[i].onclick = function(){
                let m = $('.active');
                if(m.length != 0){
                    m[0].className = ''
                }
                this.classList.add('active')
                $('#info-content').show()
                $('.userName').html(data[i].firstName);
                $('.description').html(data[i].description);
                $('.adress').html(data[i].address.streetAddress);
                $('.cityName').html(data[i].address.city)
                $('.state').html(data[i].address.state)
                $('.zip').html(data[i].address.zip)

                console.log(i)  
            }
        }

    })

    $("#search-box").keydown(() => {
       let input = document.getElementById("search-box");
       let tr = document.getElementsByClassName("data-row");
        for (z = 0; z < tr.length; z++) {
          if (true) {
           let txtValue =  tr[z].innerText;
           console.log(txtValue)
            if (txtValue.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
              tr[z].style.display = "";
            } else {
              tr[z].style.display = "none";
            }
          }
        }
      });


});


