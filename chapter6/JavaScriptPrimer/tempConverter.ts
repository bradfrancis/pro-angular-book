export class TempConverter {
    
    static convertTo(temp: number | string, units?: string) : string {
        
        // Default to celsius
        units = (units == "C" || units == "F") ? units : "C"
        
        let value: number = (<number>temp).toPrecision
            ? <number>temp : parseFloat(<string>temp);
        
        return TempConverter.performCalculation(value, units).toFixed(1);
    }
    
    private static performCalculation(value: number, units: string) : number {
        return (units == "C")
            ? ((parseFloat(value.toPrecision(2)) - 32) / 1.8)
            : ((parseFloat(value.toPrecision(5)) * 1.8) + 32)
    }
}