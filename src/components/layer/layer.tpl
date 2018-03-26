<div class="layer">
    <img src="${ require("../../assets/bg.png") }"> 
    <div class="flex-div">this is <%= name %> </div>
    <% for (let i = 0; i < arr.length; i++) {%>
    <%= arr[i] %>
    <% } %>
</div>