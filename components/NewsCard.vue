<template>
    <div class="card flex space-x-5">
        <img class="w-7/12 object-cover" src="~/assets/images/design/news.png" alt="">
        <div class="w-5/12 flex flex-col">
            <div class="text-white flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi reprehenderit omnis tempora maiores tempore fugit consequatur autem voluptatum fugiat quasi, quos perspiciatis recusandae vel dolores eligendi officia iure atque illo aut necessitatibus? Id itaque corrupti inventore omnis commodi magni?</div>
            <div class="flex text-white">
                <div class="flex ">
                    <div class=""><img src="~/assets/images/icons/heart.png" alt=""></div>
                    <div class="">20</div>
                </div>
                <div class="flex">
                    <div class=""><img src="~/assets/images/icons/comment.png" alt=""></div>
                    <div class="">20</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width: 670px;
        height: 392px;
        padding: 20px;
        background: linear-gradient(121.18deg, #F3516E 6.51%, #A30A25 85.03%);
        border-radius: 30px;
    }

    .card > img {
        border-radius: 30px;
    }
</style>