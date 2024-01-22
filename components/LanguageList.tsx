import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";

const LanguageList: React.FC = () => {
    const router = useRouter();
    const params: any = useParams();
    // const [selectedLanguage, setSelectedLanguage] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        // setSelectedLanguage(newValue);

        // Perform actions based on the selected value

        if (newValue === "en") {
            router.push("/en");
        } else if (newValue === "sp") {
            router.push("/sp");
        }

        // We can add more logic or actions as we need 🍺zhumir
    };

    return (
        <div>
            <select
                value={params.lang}
                onChange={handleChange}
                id="Languages"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="en">English</option>
                <option value="sp">Spanish</option>
            </select>
        </div>
    );
};

export default LanguageList;