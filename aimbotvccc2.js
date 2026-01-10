local redzlib =
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Vinh12eqweasw/vws/refs/heads/main/caz"))()

local Window = redzlib:MakeWindow({
    Title = "Team hack 5B : Blox Fruits",
    SubTitle = "by VietHoang",
})

local AFKOptions = {}

local Discord = Window:MakeTab({Name = "Discord", Icon = "video"})
Discord:AddDiscordInvite({
    Name = "5B script rr",
    Description = "https://discord.gg/WBrpB8ZN",
    Logo = "rbxassetid://130381759913713",
    Invite = "https://discord.gg/WBrpB8ZN"
})

local HopserverTab = Window:MakeTab({
    Name = "Hopserver",
    Icon = "",
    PremiumOnly = false
})

local Dropdown = HopserverTab:AddDropdown({
    Name = "Chọn công cụ",
    Description = "Để cho vui thôi có cái gì đâu",
    Options = {"melee", "blox fruit", "sword", "gun"},
    Default = "melee",
    Flag = "dropdown teste",
    Callback = function(Value)
        -- Handle dropdown value change here, if needed
    end
})

Window:SelectTab(HopserverTab)
local HopserverSection = HopserverTab:AddSection({"Hop server"})

HopserverTab:AddButton({
    Name = "Hopserver Rip_indra",
    Description = "Tự động vào server có Rip_indra",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/AnDepZaiHub/AnBeoDepTrai/refs/heads/main/Rip_Indra"))()
        end)
    end
})

HopserverTab:AddButton({
    Name = "Hopserver Dough King",
    Description = "Tự động vào server có Dough King",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/AnDepZaiHub/AnBeoDepTrai/refs/heads/main/Dough_King"))()
        end)
    end
})

local FixLagTab = Window:MakeTab({
    Name = "Fix lag",
    Icon = "",
    PremiumOnly = false
})

local HubsTab = Window:MakeTab({
    Name = "Hubs",
    Icon = "",
    PremiumOnly = false
})

HubsTab:AddButton({
    Name = "Redz hub",
    Description = "không key mà ngon",
    Default = false,
    Callback = function()
        local Settings = {
            JoinTeam = "Pirates", -- Pirates/Marines
            Translator = true, -- true/false
        }

        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/BloxFruits/refs/heads/main/Source.lua"))(Settings)
        end)
    end
})

HubsTab:AddButton({
    Name = "W-azure",
    Description = "không key mà load menu lâu vãi",
    Default = false,
    Callback = function()
        --[[
        WARNING: Heads up! This script has not been verified by ScriptBlox. Use at your own risk!
        ]]
        getgenv().Team = "Pirates"
        getgenv().AutoLoad = true -- Will Load Script On Server Hop
        getgenv().SlowLoadUi = false
        getgenv().ForceUseSilentAimDashModifier = false -- Force turn on silent aim, if error then executor problem
        getgenv().ForceUseWalkSpeedModifier = false -- Force turn on walk Speed Modifier, if error then executor problem

        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/3b2169c5f3bc6104dabe8e19562e5cc2.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Fram chest",
    Description = "by VietHoangios",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/avu73923/ChestFarmV1/refs/heads/main/Fram"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "CutTayHubFree",
    Description = "ngon nhưng không lấy được mảnh gương với mũ",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/a1498369f289af2671cca0005f23fb8.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Hoho hub",
    Description = "có key mà ngon",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/acsu123/HOHO_H/main/Loading_UI"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Nhặt trái",
    Description = "nhặt trái, tự động đổi server",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/marisdeptrai/Script-Free/main/FruitFinder.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Simple kaitun",
    Description = "kaitun Simple",
    Default = false,
    Callback = function()
        getgenv().simple_settings = {

            ["MASTERY"] = { -- Settings related to leveling up weapon or skill mastery
                ["ACTIVE"] = true, -- Enable or disable mastery leveling (true = enabled, false = disabled)
                ["METHOD"] = "Half", -- Method for gaining mastery, "Half"[300] or "Full"[600]
            },

            ["OBJECTIVE"] = { -- Goals for farming and unlocking features
                ["GODHUMAN"] = true, -- Automatically unlock the "Godhuman" fighting style
                ["RACE-V3"] = true, -- Automatically upgrade character race to v3 if possible
                -- Human, Mink, Fishman, Ghoul, Cyborg soon
                ["FRAGMENT"] = 100000, -- Limit number of fragments to collect

                -- SWORD
                ["CANVANDER"] = true,
                ["BUDDY-SWORD"] = true,
                ["CURSED-DUAL-KATANA"] = true,
                ["SHARK-ANCHOR"] = true, -- soon..

                -- GUN
                ["ACIDUM-RIFLE"] = true,
                ["VENOM-BOW"] = true,
                ["SOUL-GUITAR"] = true,
            },

            ["FRUITPURCHASE"] = true, -- Automatically purchase fruits based on priority

            ["PRIORITYFRUIT"] = { -- List of preferred fruits to purchase or eat in order of priority
                [1] = "Dragon-Dragon",
                [2] = "Flame-Flame",
                [3] = "Rumble-Rumble",
                [4] = "Human-Human: Buddha",
                [5] = "Dark-Dark",
            },

            ["FPSCAP"] = 30, -- Limit the frame rate to optimize performance
            ["LOWTEXTURE"] = true -- Reduce graphic quality for better performance
        }

        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/simple-hubs/contents/refs/heads/main/bloxfruit-kaitan-main.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Xero Hub",
    Description = "không key ngon",
    Default = false,
    Callback = function()
        getgenv().Team = "Marines"
        getgenv().Hide_Menu = false
        getgenv().Auto_Execute = false

        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/Xero2409/XeroHub/refs/heads/main/main.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Vxeze Hub",
    Description = "farm cũng khá ngon nhưng phần melee lỗi",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/Dex-Bear/Vxezehub/refs/heads/main/SkidLamcho.txt"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Teddy Hub",
    Description = "Auto hop server mới",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/skibiditoiletgojo/Haidepzai/refs/heads/main/Teddy-Premium"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "OMG Hub",
    Description = "có key",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/Omgshit/scripts/main/MainLoader.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Rubu v3",
    Description = "không key",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/Bubu2K/Rubutv/refs/heads/main/RubuHubV3.txt"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Min Gaming",
    Description = "không key",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/LuaCrack/Min/refs/heads/main/MinCE"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Cokka Hub",
    Description = "có key",
    Default = false,
    Callback = function()
        _G.Key = "Your Key" -- If you do not want to obtain the key again, please enter key here

        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/UserDevEthical/Loadstring/main/CokkaHub.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Speed Hub",
    Description = "không key",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Fly gui",
    Description = "by VietHoangios",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/avu73923/fly-gui/refs/heads/main/fly%20gui%20v3"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Vxeze Hub v2",
    Description = "v2",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/Dex-Bear/Vxezehub/refs/heads/main/VxezeHubv2"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Min gaming hop boss",
    Description = "vào server có dương king, rip_indra...",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/LuaCrack/Min/refs/heads/main/MinHopBoss"))()
        end)
    end
})

HubsTab:AddButton({
    Name = "Min gaming hop sword",
    Description = "hop server có kiếm huyền thoại",
    Default = false,
    Callback = function()
        -- Consider using pcall to handle potential errors during HTTP requests
        pcall(function()
            loadstring(game:HttpGet("https://raw.githubusercontent.com/LuaCrack/Min/refs/heads/main/MinHopSword"))()
        end)
    end
})

local SettingsTab = Window:MakeTab({
    Name = "Cài đặt",
    Icon = "",
    PremiumOnly = false
})

Window:SelectTab(SettingsTab)
local SettingsSection = SettingsTab:AddSection({"Khác"})

local player = game.Players.LocalPlayer

SettingsTab:AddButton({
    Name = "Đi Trên Nước",
    Description = "Cho phép đi trên nước",
    Default = false,
    Callback = function()
        local character = player.Character or player.CharacterAdded:Wait()
        local humanoidRootPart = character:WaitForChild("HumanoidRootPart")

        -- Tạo một Platform vô hình
        local platform = Instance.new("Part")
        platform.Size = Vector3.new(5, 1, 5) -- Kích thước nền
        platform.Anchored = true
        platform.Transparency = 1 -- Ẩn nền đi
        platform.CanCollide = true
        platform.Parent = game.Workspace

        -- Cập nhật vị trí nền theo nhân vật
        game:GetService("RunService").RenderStepped:Connect(function()
            if character and humanoidRootPart then
                platform.Position = Vector3.new(
                    humanoidRootPart.Position.X,
                    0,
                    humanoidRootPart.Position.Z
                )
            end
        end)
    end
})

SettingsTab:AddButton({
    Name = "Chống AFK",
    Description = "Tránh bị ngắt kết nối",
    Default = false,
    Callback = function()
        local mt = getrawmetatable(game)
        local oldNamecall = mt.__namecall
        setreadonly(mt, false)

        mt.__namecall = newcclosure(function(self, ...)
            local method = getnamecallmethod()
            if method == "Kick" and self:IsA("Player") then
                return nil -- Chặn việc kick
            end
            return oldNamecall(self, ...)
        end)

        setreadonly(mt, true)
    end
})