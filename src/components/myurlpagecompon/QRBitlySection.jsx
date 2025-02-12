export default function QRBitlySection() {
    return (
      <div className="flex justify-center items-center gap-8 p-6 bg-gray-100">
        {/* QR Code Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-center">
          <h2 className="text-lg font-semibold mb-4">QR Code</h2>
          <div className="flex justify-center items-center w-24 h-24 bg-gray-200 rounded-lg mx-auto">
            <span className="text-gray-400 text-4xl">📷</span>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Create QR Code
          </button>
        </div>
  
        {/* Bitly Page Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-center">
          <h2 className="text-lg font-semibold mb-4 flex items-center justify-center gap-1">
            Bitly Page <span className="text-blue-500 text-sm">ℹ️</span>
          </h2>
          <div className="flex justify-center items-center w-24 h-24 bg-gray-200 rounded-full mx-auto">
            <span className="text-gray-400 text-4xl">📄</span>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Create Bitly Page
          </button>
        </div>
      </div>
    );
  }
  