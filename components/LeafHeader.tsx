type Props = {
    heading: string,
    id?: string,
}

export function LeafHeader(props: Props) {
    const { heading, id = '' } = props;
    return (
        <header id={id} class="text-center m-10">
            <p
            class="my-2 mx-10 text-center m-auto text-4xl text-[#f472b6] font-bold relative inline-block after:content-[''] after:-z-10 after:w-[50px] after:h-[35px] after:bg-[linear-gradient(#f472b6,_#fff)] after:absolute after:-top-[20px] after:left-[0] after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
                { heading }
            </p>

            <img src="images/arrow_divider.svg" width="15%" class="relative left-1/2 -translate-x-1/2" />
        </header>
    );
}

