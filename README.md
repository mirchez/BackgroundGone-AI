# BackgroundGone AI

Transform your images with the power of AI - Remove backgrounds instantly using ImageKit's AI capabilities.

🔗 **Live Demo:** [https://background-gone-ai.vercel.app/](https://background-gone-ai.vercel.app/)

## Features

- 🖼️ Upload and transform images in real-time
- 🎯 AI-powered background removal
- ⚡ Fast and efficient processing
- 🎨 Clean and modern UI with Tailwind CSS
- 📱 Responsive design for all devices

## Tech Stack

- Next.js 14
- ImageKit.io for AI image processing
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- ImageKit account and credentials

### Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd background-gone-ai
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up your environment variables. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
NEXT_PUBLIC_URL_ENDPOINT=your_imagekit_url_endpoint
```

4. Start the development server:

```bash
pnpm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Click the upload button or drag and drop an image
2. Wait for the AI to process your image
3. Download the transformed image with the background removed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework used
- [ImageKit.io](https://imagekit.io/) - For AI image processing capabilities
- [Tailwind CSS](https://tailwindcss.com/) - For styling
