# 🎥 Aora

**Where creativity meets innovation: embark on a journey of limitless exploration with Aora**

Aora is a modern mobile video sharing platform built with React Native and Expo. Discover, create, and share engaging video content in a sleek and intuitive mobile experience.

## 📖 Description

Aora is a feature-rich social video platform that enables users to discover trending content, share their own videos, and explore creative works from the community. Built with cutting-edge mobile technologies, Aora provides a seamless experience for content creators and viewers alike.

The application leverages Appwrite as a Backend-as-a-Service (BaaS) to handle authentication, database operations, and file storage, allowing for a robust and scalable architecture. With its modern UI powered by NativeWind (Tailwind CSS for React Native), Aora delivers a polished user experience across iOS, Android, and web platforms.

## ✨ Features

### 🔐 Authentication & User Management
- **Email & Password Authentication**: Secure user registration and login system
- **User Profiles**: Personalized profiles with auto-generated avatar initials
- **Session Management**: Persistent authentication state with automatic session handling
- **Sign Out**: Secure logout functionality

### 📹 Video Features
- **Video Feed**: Browse all videos from the community in a chronological feed
- **Trending Videos**: Discover the latest trending content with an animated carousel displaying the 5 most recent videos
- **Video Upload**: Create and publish your own content with:
  - Video file upload support (MP4, GIF)
  - Custom thumbnail image upload (PNG, JPG, JPEG)
  - Title and AI prompt description
  - Real-time upload progress
- **Native Video Player**: In-app video playback with play/pause controls and duration tracking
- **Pull-to-Refresh**: Refresh feed content with native pull-down gesture

### 🔍 Search & Discovery
- **Real-time Search**: Search videos by title across the entire platform
- **Dynamic Search Results**: Instant results with dedicated search results page
- **Query-based Routing**: Deep-linkable search queries

### 👤 User Profiles
- **Personal Profile View**: Display user information and statistics
- **Post Count**: Track total number of videos uploaded
- **Follower Count**: View follower statistics (1.2k display)
- **User Gallery**: Browse all videos created by a specific user
- **Profile Customization**: Avatar and username display

### 🎨 User Experience
- **Smooth Animations**: Engaging transitions and zoom effects on trending carousel
- **Responsive Design**: Optimized layouts for different screen sizes
- **Empty States**: Helpful placeholder screens when no content is available
- **Loading Indicators**: Visual feedback during data fetching and uploads
- **Error Handling**: User-friendly error messages and alerts
- **Haptic Feedback**: Touch feedback for enhanced mobile experience

## 🛠️ Technology Stack

### Frontend Framework
- **React Native 0.76.5** - Cross-platform mobile development
- **Expo 52.0.20** - Development platform and build tools
- **Expo Router 4.0.15** - File-based routing system
- **React 18.3.1** - UI component library
- **TypeScript 5.3.3** - Type safety and enhanced developer experience

### Styling & UI
- **NativeWind 4.1.23** - Tailwind CSS for React Native
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **Poppins Font Family** - Custom typography with 9 font weights
- **React Native Animatable 1.4.0** - Declarative animations
- **Expo Symbols** - Icon system

### Navigation
- **Expo Router** - File-based navigation with nested layouts
- **React Navigation** - Bottom tab navigation
- **React Native Gesture Handler** - Touch gesture system
- **React Native Screens** - Native navigation primitives

### Media Handling
- **Expo AV** - Audio and video playback
- **Expo Video** - Advanced video component
- **Expo Document Picker** - Native file selection
- **React Native Video** - Video player wrapper

### Backend & Services
- **Appwrite** - Backend-as-a-Service platform
- **React Native Appwrite 0.5.0** - Appwrite SDK for React Native
  - Authentication services
  - Database operations
  - File storage
  - Avatar generation

### Developer Tools
- **Jest** - Testing framework
- **ESLint** - Code linting and quality
- **Babel** - JavaScript transpilation
- **Metro Bundler** - JavaScript bundler

### Additional Libraries
- **Expo Splash Screen** - Launch screen management
- **Expo Status Bar** - Status bar customization
- **Expo Screen Orientation** - Device orientation control
- **Expo Haptics** - Tactile feedback
- **Expo Blur** - UI blur effects
- **React Native Safe Area Context** - Safe area handling
- **React Native URL Polyfill** - URL API support

## 📁 Project Structure

```
Aora/
├── app/                          # Expo Router screens and navigation
│   ├── (auth)/                  # Authentication flow
│   │   ├── sign-in.jsx         # Sign in screen
│   │   └── sign-up.jsx         # Sign up screen
│   ├── (tabs)/                  # Main app tabs
│   │   ├── _layout.jsx         # Tab navigation layout
│   │   ├── home.jsx            # Home feed screen
│   │   ├── create.jsx          # Video upload screen
│   │   └── profile.jsx         # User profile screen
│   ├── search/                  # Search functionality
│   │   └── [query].jsx         # Dynamic search results
│   ├── _layout.jsx              # Root layout
│   └── index.jsx                # Welcome/splash screen
├── components/                   # Reusable UI components
│   ├── CustomButton.jsx         # Custom button component
│   ├── EmptyState.jsx           # Empty state placeholder
│   ├── FormField.jsx            # Form input field
│   ├── InfoBox.jsx              # Info display component
│   ├── SearchInput.jsx          # Search bar component
│   ├── Trending.jsx             # Trending video carousel
│   └── VideoCard.jsx            # Video card component
├── context/                      # Global state management
│   └── GlobalProvider.jsx       # Authentication context
├── lib/                          # Utility functions and services
│   ├── appwrite.js              # Appwrite SDK configuration and API
│   └── useAppwrite.js           # Custom hook for data fetching
├── constants/                    # App constants and assets
│   ├── icons.js                 # Icon exports
│   └── images.js                # Image exports
├── assets/                       # Static assets
│   ├── fonts/                   # Custom fonts
│   ├── icons/                   # App icons
│   └── images/                  # Images and graphics
├── hooks/                        # Custom React hooks
├── scripts/                      # Build and utility scripts
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── babel.config.js              # Babel configuration
└── metro.config.js              # Metro bundler configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (installed globally or use npx)
- **iOS Simulator** (macOS only) or **Android Emulator**
- **Expo Go app** (optional, for testing on physical devices)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adithya-b-r/Aora.git
   cd Aora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Appwrite** (Optional if using your own backend)
   
   Update the Appwrite configuration in `lib/appwrite.js`:
   ```javascript
   export const appwriteConfig = {
     endpoint: "YOUR_APPWRITE_ENDPOINT",
     projectId: "YOUR_PROJECT_ID",
     databaseId: "YOUR_DATABASE_ID",
     userCollectionId: "YOUR_USER_COLLECTION_ID",
     videoCollectionId: "YOUR_VIDEO_COLLECTION_ID",
     storageId: "YOUR_STORAGE_ID",
   };
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   
   Or use platform-specific commands:
   ```bash
   npm run android   # Run on Android emulator
   npm run ios       # Run on iOS simulator
   npm run web       # Run in web browser
   ```

## 📱 Usage

### Running the App

After starting the development server, you'll see options to:
- Press `a` - Open on Android emulator
- Press `i` - Open on iOS simulator
- Press `w` - Open in web browser
- Scan the QR code with **Expo Go** app on your physical device

### Development Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm test           # Run Jest tests
npm run lint       # Run ESLint
```

## 🏗️ Application Flow

1. **Welcome Screen**: Initial splash screen with app branding
2. **Authentication**: Sign up or sign in with email and password
3. **Home Feed**: Browse all videos with trending carousel at the top
4. **Search**: Search for videos by title using the search bar
5. **Create**: Upload new videos with thumbnails and descriptions
6. **Profile**: View your profile, stats, and uploaded videos
7. **Video Playback**: Tap any video card to play content

## 🔑 Key Features Explained

### Trending Carousel
The trending section displays the 5 most recent videos in an animated horizontal carousel. The active video scales up with a smooth zoom animation, creating an engaging browsing experience.

### Video Upload Flow
1. Tap the "+" icon in the bottom navigation
2. Select a video file from your device
3. Choose a thumbnail image
4. Enter a title and AI prompt description
5. Submit to publish your video

### Search Functionality
Use the search bar on the home screen to find videos. Results are displayed on a dedicated search results page with the query shown in the URL for easy sharing.

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with smooth transitions
- **Dark Theme**: Elegant dark color scheme with accent colors
- **Responsive Layouts**: Optimized for various screen sizes
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Native Feel**: Platform-specific components and behaviors

## 📊 Backend Structure (Appwrite)

### Database Collections

**Users Collection**
- accountId (string)
- email (string)
- username (string)
- avatar (URL)

**Videos Collection**
- title (string)
- thumbnail (URL)
- video (URL)
- prompt (string)
- creator (relationship to Users)
- $createdAt (datetime)

### Storage Buckets
- Video files storage
- Thumbnail images storage

## 🔒 Security

- Secure authentication with Appwrite
- Session management and token handling
- Input validation on forms
- File type restrictions on uploads
- Error handling to prevent information leakage

## 📄 License

This project is available for educational and personal use.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Backend powered by [Appwrite](https://appwrite.io)
- Styled with [NativeWind](https://www.nativewind.dev)
- Icons from [Expo Symbols](https://docs.expo.dev/develop/symbols/)

---

**Built with ❤️ using React Native and Expo**
