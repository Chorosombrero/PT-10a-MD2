const url = "http://localhost:5000/amigos";
const gif = $("#gif");
const lista = $("#lista");

gif.hide();

//Lista
let firstClick = false;
$("#boton").click(function () {
  gif.show();
  lista.empty();
  $.get(url, function (data) {
    //if (!firstClick) {
    console.log(data);
    data.forEach((e) =>
      $(`<div id = "${e.id}"> 
                <li>${e.name}</li>
                </div>`).appendTo("#lista")
    );
    gif.hide();
    //firstClick = true;
    // }
  });
});

//Search
$("#search").click(function () {
  let input = $("input");
  const span = $("#amigo");
  span.text("");

  $.get(`${url}/${input[0].value}`, function (data) {
    console.log(data);
    $(`<div>
          <p> ${data.name} </p>
        </div>`).appendTo("#amigo");
    input.val("");
  });
});

//Delete
$("#delete").click(function () {
  let input = $("#inputDelete");
  const span = $("#success");
  let friend; 
  span.text("");
  //if (typeof "number"){}
 
  $.get(`${url}/${input[0].value}`, function (data) {
    friend = data
    console.log(friend)
  })
  
  $.ajax(`${url}/${input[0].value}`, {
    method: "DELETE"
  }).done(() => {
    input.val("");
    span.text(`${friend.name} fue eliminado con exito`);
  });

  
});
