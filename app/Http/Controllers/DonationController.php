<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Cashier\Exceptions\IncompletePayment;

class DonationController extends Controller
{
    public function processDonation(Request $request)
    {
        $user = $request->user(); 
        $amount = $request->input('amount'); 

        try {
            $payment = $user->charge($amount * 100, $request->input('payment_method_id')); 
            return response()->json(['status' => 'success', 'message' => 'Donazione completata con successo!']);
        } catch (IncompletePayment $exception) {
            return response()->json(['status' => 'requires_action', 'payment_intent_secret' => $exception->payment->client_secret]);
        } catch (\Exception $exception) {
            return response()->json(['status' => 'error', 'message' => 'Errore durante il processo di donazione.']);
        }
    }
}