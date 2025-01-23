import { PropsWithChildren } from "react"
import { Icons } from "./icons"
import {
  CogIcon,
  Gift,
  Headphones,
  HelpCircle,
  Inbox,
  Menu,
  MicOff,
  Phone,
  Pin,
  PlusCircle,
  Search,
  Smile,
  Sticker,
  UserCircle,
  Video,
  X,
} from "lucide-react"
import Image from "next/image"

export const MockDiscordUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">
      {/* Server List */}
      <div className="hidden sm:flex w-[72px] bg-discord-sidebar-color py-3 flex-col items-center min-w-16">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>
        <div className="w-8 h-[2px] bg-discord-background rounded-full my-2" />

        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}
        <div className="group mt-auto size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#3ba55c] cursor-not-allowed">
          <span className="text-lg font-semibold text-gray-400">
            <PlusCircle className="text-[#3ba55c] group-hover:text-white" />
          </span>
        </div>
      </div>

      {/* DM list */}
      <div className="hidden md:flex w-60 bg-[#2f3136] flex-col min-w-60">
        <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Icons.friends className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Icons.nitro className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Icons.mail className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Message Requests</span>
            </div>
          </div>

          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8e9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>
            <div className="flex items-center px-2 py-1.5 rounded bg-[#393c43] text-white cursor-pointer">
              <div className="rounded-full bg-white mr-3">
                <Image
                  src="/brand-icon.png"
                  alt="Brand Icon"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-medium">AppSignal</span>
            </div>
            <div className="my-1 space-y-px">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="group flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed hover:bg-[#36373C]"
                >
                  <div className="size-8 rounded-full bg-discord-background group-hover:bg-[#4b4d55] mr-3" />
                  <span className="font-medium">User {i + 1}</span>
                  <span className="ms-auto hidden group-hover:block">
                    <X className="size-4" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-400">SJ</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#b0bbbe] flex items-center">Online</p>
          </div>

          <div className="flex items-center">
            <div className="flex items-center p-2 rounded-lg hover:bg-[#36373C]">
              <MicOff className="size-5 text-[#F23F43] cursor-pointer" />
            </div>
            <div className="flex items-center p-2 rounded-lg hover:bg-[#36373C]">
              <Headphones className="size-5 text-[#b9bbbe] cursor-pointer" />
            </div>
            <div className="flex items-center p-2 rounded-lg hover:bg-[#36373C]">
              <CogIcon className="size-5 text-[#b9bbbe] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* DM header */}
        <div className="h-16 bg-[#36393f] flex items-center px-4 shadow-sm border-b border-[#202225]">
          <div className="md:hidden mr-4">
            <Menu className="size-6 text-[#b9bbbe] hover:text-white cursor-pointer"></Menu>
          </div>
          <div className="flex items-center">
            <div className="absolute">
              <div className="rounded-full bg-white mr-3">
                <Image
                  src={"/brand-icon.png"}
                  alt={"Brand Icon"}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-3 size-3 bg-green-500 rounded-full border-2 border-[#36393f]" />
            </div>
            <p className="ms-12 font-semibold text-white">AppSignal</p>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-[#b9bbbe] overflow-ellipsis">
            <Phone className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Video className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Pin className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <UserCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Search className="size-5 hover:text-white cursor-not-allowed hidden sm:block md:hidden lg:block" />
            <Inbox className="size-5 hover:text-white cursor-not-allowed hidden sm:block md:hidden lg:block" />
            <HelpCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block md:hidden lg:block" />
          </div>
        </div>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-4 bg-discord-background flex flex-col-reverse">
          {children}
        </div>

        {/* Message Input */}
        <div className="p-4">
          <div className="flex items-center bg-[#40444b] rounded-lg p-1">
            <PlusCircle className="mx-3 text-[#b9bbb3] hover:text-white cursor-not-allowed" />
            <input
              readOnly
              type="text"
              placeholder="Message @AppSignal"
              className="bg-transparent py-2.5 px-1 text-sm text-white placeholder-[#72767d] focus:outline-none cursor-not-allowed overflow-clip"
            />
            <div className="flex items-center space-x-3 mx-3 ms-auto text-[#b9bbbe]">
              <Gift className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Sticker className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Smile className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
