export function MenuHeader() {
    return (
        <header id="menu_header" class="flex flex-col md:flex-row gap-4 items-center w-[90%] m-auto relative">
            <img src="images/stars.svg" width="100%" class="absolute inset-0 opacity-50 -z-10" />
            <img src="images/meetu_3.png" />
            <div class="flex flex-col relative text-center md:text-left">
                <h1 class="text-4xl uppercase font-serif text-gray-500">Avaialble Services</h1>
                <p class="font-serif text-lg font-thin lowercase text-center">✌𝓸𝓱 ! 𝓼𝓸 𝓶𝓪𝓷𝔂 𝓽𝓸 𝓬𝓱𝓸𝓸𝓼𝓮 𝓯𝓻𝓸𝓶 ✌</p>
            </div>
        </header>
    )
}