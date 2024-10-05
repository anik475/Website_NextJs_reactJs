import { NextResponse } from 'next/server';

// export async function POST(req) {
//     try {
//         const { messages } = await req.json();
//         console.log(messages)
//         // Fetching data from Flask backend
//         const flaskResponse = await fetch('http://localhost:8080/aiapp', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message: messages })
//         });

//         // Parse the response from Flask
//         const data = await flaskResponse.json();

//         // Check if the response was successful
//         if (data.success) {
//             // Return the message from Flask to the client
//             return NextResponse.json({
//                 message: data.message // Adjusted to match the structure returned by Flask
//             });
//         } else {
//             // Handle cases where success is false
//             return NextResponse.json({ error: 'Backend returned an error' }, { status: 500 });
//         }
//     } catch (error) {
//         console.error('Error fetching data from Flask backend:', error);
//         return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
//     }
// }

export async function POST(req) {
    try {
        const { messages } = await req.json();
        console.log(messages);

        // Filter the messages to only include 'user' messages
        const userMessages = messages.filter(msg => msg.role === 'user');

        // Get the latest user message (last one in the filtered array)
        const latestMessage = userMessages[userMessages.length - 1]?.content;

        if (!latestMessage) {
            return NextResponse.json({ error: 'No user message found' }, { status: 400 });
        }

        console.log("Latest user message:", latestMessage);

        // Fetching data from Flask backend, passing only the latest message
        const flaskResponse = await fetch('https://throbbing-leaf-0915.ploomberapp.io/aiapp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: latestMessage }) // Send only the latest message
        });

        // Parse the response from Flask
        const data = await flaskResponse.json();

        // Check if the response was successful
        if (data.success) {
            // Return the message from Flask to the client
            return NextResponse.json({
                message: data.message // Adjusted to match the structure returned by Flask
            });
        } else {
            // Handle cases where success is false
            return NextResponse.json({ error: 'Backend returned an error' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error fetching data from Flask backend:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}

