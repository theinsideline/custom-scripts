import { LeadDyno } from "./clients/leaddyno";
import { Gtag } from "./clients/gtag";
import { LuckyOrange } from "./clients/luckyorange";
import { PowrIo } from "./clients/powrio";
import { TawnTawn } from "./scripts/tauntaun";

const leadDynoClient = new LeadDyno();
const gtagClient = new Gtag();
const luckyOrange = new LuckyOrange();
const powrIo = new PowrIo();

leadDynoClient.init();
gtagClient.init();
luckyOrange.init();
powrIo.init();

const tauntaun = new TawnTawn();

tauntaun.location();
tauntaun.myButtonBlack();
