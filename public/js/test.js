var productdata = [
    {
        "ProductID": "AS00",
        "Name": "JAPANESE ABALONE SASHIMI",
        "Price": 738000,
        "Info": "Made from fresh ingredients and the quintessence of Japanese cuisine, each piece of abalone sashimi will melt on the tip of the tongue with a rich, sweet and soft flavor.",
        "Image": "shashimisushi0",
        "Category": "Shashimisushi",
        "Sold": 103
    },
    {
        "ProductID": "AS01",
        "Name": "SMALL OCTOPUS",
        "Price": 680000,
        "Info": "With fresh quality and natural sweetness, this dish will captivate your taste buds and bring a sense of luxury and elegance.",
        "Image": "shashimisushi1",
        "Category": "Shashimisushi",
        "Sold": 120
    }
];
appendData(productdata);
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var divCol = document.createElement("div");
        divCol.className = "col-lg-6";

        var divMain = document.createElement("div");
        divMain.className = "d-flex align-items-center";

        var img = document.createElement("img");
        img.className = "flex-shrink-0 img-fluid rounded";
        img.src = "/image/" + data[i].Category + "/" + data[i].Image + ".jpg";
        img.alt = "";
        img.style.width = "80px";

        var divText = document.createElement("div");
        divText.className = "w-100 d-flex flex-column text-start ps-4";

        var h5Title = document.createElement("h5");
        h5Title.className = "d-flex justify-content-between border-bottom pb-2";
        var spanTitle = document.createElement("span");
        spanTitle.innerText = data[i].Name;
        var spanPrice = document.createElement("span");
        spanPrice.className = "text-primary";
        spanPrice.innerText = data[i].Price + "đ";

        var h5Info = document.createElement("h5");
        var smallInfo = document.createElement("small");
        smallInfo.className = "fst-italic";
        smallInfo.innerText = data[i].Info;

        h5Title.appendChild(spanTitle);
        h5Title.appendChild(spanPrice);
        h5Info.appendChild(smallInfo);
        divText.appendChild(h5Title);
        // divText.appendChild(h5Info);
        divMain.appendChild(img);
        divMain.appendChild(divText);
        divCol.appendChild(divMain);

        mainContainer.appendChild(divCol);
    }
}