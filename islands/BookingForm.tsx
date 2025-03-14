import { Menu } from "../utils/menu_list.ts";

type Props = {
    selected_menu: Menu[]
}

export function BookingForm(props: Props) {
    const { selected_menu} = props;

    return (
        <>
        <section class="w-[95%] m-auto flex justify-center">
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" required placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" required placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Date and Time of birth
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="datetime-local" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City of Birth
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Meerut" />
                    </div>
                </div>
                <div class="flex items-center -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Your contact number
                        </label>
                        <input pattern="[0-9]{10}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="mobile number" />
                    </div>
                    <span class="mx-2">OR</span> 
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            E-mail
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="email"  placeholder="Enter your email" />
                    </div>
                </div>
                <div class="flex flex-wrap items-center -mx-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Any special request or message
                    </label>
                    <textarea rows={4} 
                        class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Enter your message"></textarea>
                </div>

                <div class="flex gap-2 p-4 items-center border-2 border-double">
                    <img src="images/upi.jpg" width="40%"/>
                    <div class="flex flex-col gap-2">
                        <h3>UPI Details: </h3>
                        <p class="text-gray-500">
                            Meetu Paroothi
                        </p>
                        <p class="text-gray-500">
                            UPI Handle: <b>9917023456@ptaxis</b>
                        </p>
                    </div>
                </div>

                <div class="flex justify-center items-center -mx-3 my-6">
                    <input type="submit" 
                        value="Request Booking" 
                        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 focus:ring-2 focus:ring-blue-300" />
                </div>

            </form>
        </section>
        </>
    )
}