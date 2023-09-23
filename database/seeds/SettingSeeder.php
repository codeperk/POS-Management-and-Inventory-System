<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Insert some stuff
        DB::table('settings')->insert(
            array(
                'id' => 1,
                'email' => 'admin@example.com',
                'currency_id' => 1,
                'client_id' => 1,
                'warehouse_id' => Null,
                'CompanyName' => 'Sahara Mart India',
                'CompanyPhone' => '6315996770',
                'CompanyAdress' => '3618 Abia Martin Drive',
                'footer' => 'Sahara Mart India - Ultimate Inventory With POS',
                'developed_by' => 'Codeperk',
                'logo' => 'logo-default.png',
            )

        );
    }
}
