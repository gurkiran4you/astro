import { useRef, useState } from "preact/hooks";
import { Menu } from "../utils/menu_list.ts";

type Props = {
    selected_menu: Menu[]
}

export function BookingForm(props: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const { selected_menu} = props;
    const formRef = useRef<HTMLFormElement>();

    const bookAppointment = async(e: SubmitEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        if (selected_menu.length === 0) {
            // show error
            setIsLoading(false);
            return;
        }
        const formData = new FormData(e.target as HTMLFormElement);

        const total_price = selected_menu.reduce((acc, item) => {
            acc += item.price;
            return acc;
        }, 0)
    
        const total_duration = selected_menu.reduce((acc, item) => {
            acc += parseInt(item.duration.split(" ")[0], 10);
            return acc;
        }, 0)

        formData.append('selectedmenu', selected_menu.map(m => `${m.type.toLocaleUpperCase()} - ${m.name}`).join(','));
        formData.append('totalprice', total_price.toString());
        formData.append('totalduration', total_duration.toString());


        
        const response = await fetch('/api/booking', {
            method: 'POST',
            body: formData
        })

        const data = await response.json();
        if (data && data.success) {
            setIsError(false);
            setMessage('Success! You will be contacted shortly');
        } else {
            setIsError(true);
            setMessage('Something went bad, please try again later');
        }
        setIsLoading(false);
        (formRef.current as HTMLFormElement).reset();
    }

    return (
        <>
        <section class="w-[95%] m-auto flex justify-center">
            <form ref={formRef} class="w-full max-w-lg" onSubmit={bookAppointment}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input name="firstname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" required placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input name="lastname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" required placeholder="Doe" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Date and Time of birth
                        </label>
                        <input name="datetime" required class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="datetime-local" placeholder="Jane" />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City of Birth
                        </label>
                        <input name="birthcity" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Meerut" />
                    </div>
                </div>
                <div class="flex items-center -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Your contact number
                        </label>
                        <input title="Please enter exactly 10 digits" name="number" required pattern="[1-9]{1}[0-9]{9}" class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="mobile number" />
                    </div>
                </div>
                <div class="flex flex-wrap items-center -mx-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Any special request or message
                    </label>
                    <textarea name="message" rows={4} 
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

                {
                    message !== '' && (
                        <div class={`${isError ? 'text-red-400' : 'text-green-400'} my-4 text-center font-mono text-xs`}>{message}</div>
                    )
                }

                <div class="flex justify-center items-center -mx-3 my-6">
                    <button type="submit" 
                        disabled={selected_menu.length === 0 || isLoading}
                        value="Request Booking" 
                        class="bg-blue-500 disabled:pointer-events-none disabled:opacity-25 inline-flex gap-2 items-center text-white font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
                           { isLoading && (
                                <svg class="spinner -ml-1 mr-2 h-5 w-5"  viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="path" fill="none" stroke="white" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                                </svg>
                           )
                           }
                            Request Booking
                    </button>
                </div>

            </form>
        </section>
        </>
    )
}