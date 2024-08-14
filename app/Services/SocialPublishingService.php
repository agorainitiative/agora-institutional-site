<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SocialPublishingService
{
    public function postOnFacebook($text, $image)
    {
        $token = getenv('FACEBOOK_ACCESS_TOKEN');
        $url = 'https://graph.facebook.com/v9.0/me/photos'; 

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])->post($url, [
            'caption' => $text,
            'url' => $image, // URL dell'immagine da postare
            'access_token' => $token
        ]);
    }

    public function postOnLinkedIn($text, $image)
    {
        $token = getenv('LINKEDIN_ACCESS_TOKEN');
        $url = 'URL_API_LINKEDIN_PER_POSTARE';

        $postData = [
            'author' => 'urn:li:person:YOUR_PERSON_ID',
            'commentary' => $text,
            'visibility' => ['com.linkedin.ugc.MemberNetworkVisibility' => 'PUBLIC'],
            'content' => [
                'title' => $text,
                'description' => $text,
                'submittedUrl' => $image,
            ],
        ];

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])->post($url, $postData);
    }

    public function postOnInstagram($request)
    {
        $url = 'https://graph.facebook.com/v14.0/INSTAGRAM_BUSINESS_ACCOUNT_ID/media';
        $token = getenv('INSTAGRAM_API_TOKEN'); 

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])->post($url, [
            'image_url' => 'URL_DELL_IMMAGINE_DA_POSTARE',
            'caption' => $request->get('content'),
            'access_token' => $token
        ]);
    }
}