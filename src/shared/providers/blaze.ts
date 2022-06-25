import { makeConnectionBlazeCrash } from "@viniciusgdr/blaze";
import { updateCrashUseCase } from "../../modules/Crash/useCases/updateCrashController.ts";

export async function blazeProvider() {
    const socket = makeConnectionBlazeCrash({
        needCloseWithCompletedSession: false,
        timeoutSendingAliveSocket: 5000,
    });

    socket.ev.on('crash_complete', async crash => await updateCrashUseCase.execute({
        id: crash.id,
        crash_point: crash.crash_point
    }));
}