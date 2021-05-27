<template>
    <div class="transition-all duration-700">
        <div :class="`absolute z-50 top-0 right-0 ${ isOpened ? 'w-80' : 'w-20' } bg-black h-screen flex flex-col py-16 px-4 bg-opacity-80 text-white`">
            <div :class="`flex flex-col flex-1 items-center ${ isAuth && 'hidden' }`">
                <img class="mb-2" src="~/assets/images/icons/persone.png" alt="">
                <div class="">Register</div>
                <div class="">Login</div>
            </div>
            <div :class="`flex-1 space-y-4 scrollbar-hidden overflow-x-hidden ${ !isAuth && 'hidden' }`">
                <div class="flex">
                    <img class="rounded-xl" src="~/assets/images/avatar.png" />
                    <div :class="`ml-5 flex-1 ${ !isOpened && 'hidden' }`">
                        <div class="text-xl mb-3">NickName</div>
                        <div class="flex justify-between">
                            <div class="flex space-x-2">
                                <img class="w-6 h-6" src="~/assets/images/icons/award.png" alt="">
                                <img class="w-6 h-6" src="~/assets/images/icons/award.png" alt="">
                            </div>
                            <div class="flex">
                                <img class="w-6 h-6" src="~/assets/images/icons/coin.png" alt="">
                                <div class="text-gold font-bold ml-1">560</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div :class="`flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }`">
                        <div class="">1 vs 1</div>
                        <img class="w-8 h-8" src="~/assets/images/levels/1.png" alt="" />
                        <div :class="`flex flex-col flex-1 ${ !isOpened && 'hidden' }`">
                            <div class="flex justify-between text-mainBlue text-sm">
                                <div class="">630 ELO</div>
                                <div class="">1300</div>
                            </div>
                            <div class="relative w-full flex flex-col justify-center">
                                <div class="progress shadow" :style="{ width: `${ 45 }%` }"></div>
                                <div class="line absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div :class="`flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }`">
                        <div class="">2 vs 2</div>
                        <img class="w-8 h-8" src="~/assets/images/levels/5.png" alt="" />
                        <div :class="`flex flex-col flex-1 ${ !isOpened && 'hidden' }`">
                            <div class="flex justify-between text-mainBlue text-sm">
                                <div class="">630 ELO</div>
                                <div class="">1300</div>
                            </div>
                            <div class="relative w-full flex flex-col justify-center">
                                <div class="progress shadow" :style="{ width: `${ 55 }%` }"></div>
                                <div class="line absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div :class="`flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }`">
                        <div class="">3 vs 3</div>
                        <img class="w-8 h-8" src="~/assets/images/levels/10.png" alt="" />
                        <div :class="`flex flex-col flex-1 ${ !isOpened && 'hidden' }`">
                            <div class="flex justify-between text-mainBlue text-sm">
                                <div class="">630 ELO</div>
                                <div class="">1300</div>
                            </div>
                            <div class="relative w-full flex flex-col justify-center">
                                <div class="progress shadow" :style="{ width: `${ 10 }%` }"></div>
                                <div class="line absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div :class="`flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }`">
                        <div class="">5 vs 5</div>
                        <img class="w-8 h-8" src="~/assets/images/levels/6.png" alt="" />
                        <div :class="`flex flex-col flex-1 ${ !isOpened && 'hidden' }`">
                            <div class="flex justify-between text-mainBlue text-sm">
                                <div class="">630 ELO</div>
                                <div class="">1300</div>
                            </div>
                            <div class="relative w-full flex flex-col justify-center">
                                <div class="progress shadow" :style="{ width: `${ 92 }%` }"></div>
                                <div class="line absolute"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-white border-b-1px"></div>
                <div :class="`flex space-x-10 ${ !isOpened && 'hidden' }`">
                    <div class="relative cursor-pointer">
                        <div class="absolute -top-2 -right-4">15</div>
                        <img src="~/assets/images/icons/group.png" alt="">
                    </div>
                    <div class="cursor-pointer">
                        <img src="~/assets/images/icons/waves.png" alt="">
                    </div>
                    <div class="cursor-pointer">
                        <img src="~/assets/images/icons/clock.png" alt="">
                    </div>
                    <div class="cursor-pointer border-b-2 pb-2">
                        <img src="~/assets/images/icons/chat.png" alt="">
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex space-x-5">
                        <img src="~/assets/images/avatar.png" alt="">
                        <div class="">
                            <div class="font-medium">James</div>
                            <div class="">Playing</div>
                        </div>
                    </div>
                    <div class="flex space-x-5">
                        <img src="~/assets/images/avatar.png" alt="">
                        <div class="">
                            <div class="font-medium">Nabe</div>
                            <div class="">Playing</div>
                        </div>
                    </div>
                    <div class="flex space-x-5">
                        <img src="~/assets/images/avatar.png" alt="">
                        <div class="">
                            <div class="font-medium">Ivan</div>
                            <div class="text-green-600">Online</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <svg :class="`cursor-pointer transform ${ isOpened && 'rotate-180' }`" @click="SideBarToggle" width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0929 1L1.84546 13L14.0929 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .line {
        width: 100%;
        height: 1px;
        background: #A4E7FF;
    }

    .shadow {
        box-shadow: 0px 0px 4px 2px rgba(59, 130, 246, 0.8);
    }

    .progress {
        height: 4px;
        border-radius: 2px;
        background:#A4E7FF;
    }
</style>

<script>
export default {
    data: () => ({
        isAuth: true,
        isOpened: false
    }),
    methods: {
        SideBarToggle: function() {
            this.isOpened = !this.isOpened;
        }
    }
}
</script>