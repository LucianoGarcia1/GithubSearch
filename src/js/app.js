const btnSearch = document.querySelector(".Btnsearch");
const input = document.querySelector(".search");

btnSearch.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Erro campo obrigatório");

    }else{

        document.querySelector(".profile").classList.add("active");

        const userStates = async(names) =>{
            const url = `https://api.github.com/users/${names}`;

            const requireUser = await fetch(url, {})
            .then(response => response.json())
            .then((data) =>{
                document.querySelector(".profile img").src = data.avatar_url;
                document.querySelector(".profile h1").innerText = data.name;
                document.querySelector(".profile span").innerText = "Joined " + data.created_at;

                document.querySelector(".bio .location>span").innerText = data.location;

                document.querySelector(".bio .company>span").innerText = data.company;

                document.querySelector(".text-bio p").innerText = data.bio;
                let a = document.querySelector(".text-bio a");

                a.setAttribute("href", data.blog);
                a.innerText = data.blog;

                //Features

                document.querySelector(".follower p").innerText = data.followers;
                document.querySelector(".following p").innerText = data.following;
                document.querySelector(".repositorio p").innerText = data.public_repos;
            })
            .catch(() =>{
                console.log("error");
            })
        }
        userStates(input.value);
    }
})