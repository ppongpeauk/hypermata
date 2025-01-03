import { ScrollView, View } from "react-native";
import { lines } from "@/constants/lines";
import { Text } from "@/components/ui/Text";
import { Ionicons } from "./VectorIcons";

export default function LineView({ line }: { line: (typeof lines)[0] }) {
	const stationComponents = Array.from({ length: 10 }).map((_, index) => {
		return (
			<View className="flex-row flex-1 items-center" key={index}>
				<View
					className={`border-2 ${line.borderColor} bg-white h-8 w-8 rounded-full`}
				/>
				<View className="absolute flex-col items-end pl-40">
					<Text className="text-text" size="md" weight="bold">
						Shady Grove
					</Text>
					<Ionicons
						name="information-circle"
						size={16}
						className="text-text"
					/>
				</View>
			</View>
		);
	});

	return (
		<View className="flex flex-1 flex-row items-start px-4 w-full">
			{/* Trains (from bottom to top) */}
			<View className="flex-row items-center gap-2">
				<View className="flex-col items-center">
					<Text className="text-text" size="sm" weight="bold">
						1 min
					</Text>
					<View className="flex-row">
						<Text className="text-text" size="xs" weight="medium">
							8-car
						</Text>
					</View>
				</View>
				<View className="flex-col items-center">
					<Ionicons
						name="train-sharp"
						size={24}
						className={line.textColor}
					/>
					<Ionicons
						name="chevron-down"
						size={20}
						className={line.textColor}
					/>
				</View>
			</View>
			{/* Center Pole */}
			<View
				className={`flex items-center ${line.color} border ${line.borderColor} h-fit w-4 rounded-full mx-8 py-8 mb-32 gap-24`}
			>
				{stationComponents}
			</View>
			{/* Trains (from top to bottom) */}
			<View className="flex-row items-center gap-2">
				<View className="flex-col items-center">
					<Ionicons
						name="chevron-up"
						size={20}
						className={line.textColor}
					/>
					<Ionicons
						name="train-sharp"
						size={24}
						className={line.textColor}
					/>
				</View>
				<View className="flex-col items-center">
					<Text className="text-text" size="sm" weight="bold">
						1 min
					</Text>
					<View className="flex-row">
						<Text className="text-text" size="xs" weight="medium">
							8-car
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
