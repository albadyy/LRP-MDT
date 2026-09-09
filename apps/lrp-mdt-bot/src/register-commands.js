import discord from 'discord.js';
import { getConfig, requireEnvironment } from './config.js';

const { REST, Routes, SlashCommandBuilder } = discord;

const config = getConfig();
requireEnvironment(config, ['token', 'clientId', 'guildId']);

const commands = [
	new SlashCommandBuilder()
		.setName('mdt')
		.setDescription('فتح نظام الشرطة الآمن لـ LEGACY ROLEPLAY')
		.setDMPermission(false),
].map((command) => command.toJSON());

const rest = new REST({ version: '10' }).setToken(config.token);
await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), { body: commands });
console.log('تم تسجيل أمر /mdt في سيرفر LEGACY ROLEPLAY.');
