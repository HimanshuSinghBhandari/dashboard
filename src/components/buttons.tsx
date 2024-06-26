import React from 'react';
import { TrashIcon, PencilIcon, UserIcon, UserPlusIcon, ChatBubbleBottomCenterIcon, EyeIcon } from '@heroicons/react/24/outline';

const JobButton: React.FC = () => {
  return (
    <div className="p-4">
      {/* Buttons */}
      <div className="flex justify-end mb-8 space-x-2 mr-4">
        <button className="bg-transparent border border-[#DC4A2D] text-[#DC4A2D] px-3 py-2 rounded-md flex items-center">
          <TrashIcon className="w-5 h-5 mr-2" />
          <span>Delete Job</span>
        </button>
        <button className="bg-[#DC4A2D] text-white px-3 py-2 rounded-md flex items-center">
          <PencilIcon className="h-5 w-5 mr-2" />
          <span>Edit Job</span>
        </button>
      </div>

      {/* Applicant List */}
      <div className="border-b border-gray-200 pb-4 mb-4 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
            <span className="font-medium text-gray-500">Applicant</span>
          </div>
          <span className="font-medium ">400</span>
        </div>
      </div>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UserPlusIcon className="w-5 h-5 mr-2  text-gray-500" />
            <span className="font-medium  text-gray-500">Matches</span>
          </div>
          <span className="font-medium">100</span>
        </div>
      </div>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ChatBubbleBottomCenterIcon className="w-5 h-5 mr-2  text-gray-500" />
            <span className="font-medium  text-gray-500">Messages</span>
          </div>
          <span className="font-medium">147</span>
        </div>
      </div>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <EyeIcon className="w-5 h-5 mr-2  text-gray-500" />
            <span className="font-medium  text-gray-500">Views</span>
          </div>
          <span className="font-medium">800</span>
        </div>
      </div>
    </div>
  );
};

export default JobButton;
