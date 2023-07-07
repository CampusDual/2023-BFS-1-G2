export class FormatLocation {
  public format(infoLocation: string): any[] {
    let resFinal = infoLocation.split(",");

    resFinal = resFinal.slice(2);
    resFinal.toString().split(" ");
    let ciudad = resFinal[0].split(" ")[2];
    resFinal.shift();
    resFinal.unshift(ciudad);
    return resFinal;
  }
}
